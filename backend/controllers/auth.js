import User from "../models/users.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookies from "../util/generateToken.js";

export const signupUser = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    // if (password !== confirmPassword) {
    //   return res.status(400).json({ error: "Password don't match" });
    // }

    const userEmail = await User.findOne({ email });
    const userName = await User.findOne({ username });

    if (userEmail || userName) {
      return res.status(400).json({ error: "User already exists" });
    }

    //Hashing passowrd
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // const profilePic = `https://avatar.iran.liara.run/username?username=${firstname}+${lastname}`;

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      // generate JWT
      generateTokenAndSetCookies(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        // profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    generateTokenAndSetCookies(user._id, res);

    res.status(200).json({
      _id: user._id,
      username: user.username,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: error.message });
  }
};
