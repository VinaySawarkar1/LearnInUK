const User = require('./models/User'); // Assuming your User model file path
const bcrypt = require('bcryptjs');

const createUser = async () => {
  try {
    const user = new User({
      username: 'your_username',
      password: 'your_strong_password', // Replace with a strong password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
    console.log('User created successfully!');
  } catch (error) {
    console.error(error);
  }
};

createUser(); // Call the function to create a user
