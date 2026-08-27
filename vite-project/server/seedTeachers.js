import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

// Adjust the path to match your actual student/teacher model file
import student from './models/User.js'; // <-- update this path

const teachers = [
  { name: "Anita Sharma", email: "anita.sharma@codeworld.edu", password: "teach123", role: "teacher" },
  { name: "Rajesh Kumar", email: "rajesh.kumar@codeworld.edu", password: "teach123", role: "teacher" },
  { name: "Priya Nair", email: "priya.nair@codeworld.edu", password: "teach123", role: "teacher" },
  { name: "Vikram Singh", email: "vikram.singh@codeworld.edu", password: "teach123", role: "teacher" },
  { name: "Sneha Patil", email: "sneha.patil@codeworld.edu", password: "teach123", role: "teacher" },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB");


    for (const t of teachers) {
      const hash = await bcrypt.hash(t.password, 10);
      await student.create({ ...t, password: hash });
      console.log(`Inserted: ${t.email}`);
    }

    console.log("Done seeding teachers.");
  } catch (err) {
    console.error("Seeding error:", err);
  } finally {
    mongoose.disconnect();
  }
}

seed();