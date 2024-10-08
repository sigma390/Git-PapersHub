"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.facultySignUpSchema = exports.signUpSchema = void 0;
const zod_1 = require("zod");
//will be used in  Signup Route
exports.signUpSchema = zod_1.z.object({
    //username
    name: zod_1.z.
        string({ required_error: 'Username is required!!!' }).trim()
        .min(3, { message: 'username must be atleast of 3 chars' })
        .max(40, { message: 'username must not be more than  40 chars' }),
    //email
    username: zod_1.z.
        string({ required_error: 'Username is required!!!' }).trim()
        .email({ message: 'Invalid Email Addreess!!' })
        .min(3, { message: 'username must be atleast of 3 chars' })
        .max(40, { message: 'username must not be more than  40 chars' }),
    //for password 
    password: zod_1.z.
        string({ required_error: 'Password is required!!!' }).trim()
        .min(6, { message: 'Password must be atleast of 3 chars' })
        .max(20, { message: 'Password must not be more than  20 chars' })
});
// teacher Signup Vaidation 
exports.facultySignUpSchema = zod_1.z.object({
    //username
    name: zod_1.z.
        string({ required_error: 'Username is required!!!' }).trim()
        .min(3, { message: 'username must be atleast of 3 chars' })
        .max(40, { message: 'username must not be more than  40 chars' }),
    //email
    email: zod_1.z.
        string({ required_error: 'Email is required!!!' }).trim()
        .email({ message: 'Invalid Email Addreess!!' })
        .min(3, { message: 'Email must be atleast of 3 chars' })
        .max(40, { message: 'Email must not be more than  40 chars' }),
    //for password 
    password: zod_1.z.
        string({ required_error: 'Password is required!!!' }).trim()
        .min(6, { message: 'Password must be atleast of 3 chars' })
        .max(20, { message: 'Password must not be more than  20 chars' })
});
//will be used in  Login Route
exports.loginSchema = zod_1.z.object({
    username: zod_1.z.
        string({ required_error: 'Username is required!!!' }).trim()
        .min(3, { message: 'username must be atleast of 3 chars' })
        .max(20, { message: 'username must not be more than  20 chars' }),
    //for password 
    password: zod_1.z.
        string({ required_error: 'Password is required!!!' })
        .min(6, { message: 'Password must be atleast of 3 chars' })
        .max(20, { message: 'Password must not be more than  20 chars' })
});
exports.default = { signUpSchema: exports.signUpSchema, loginSchema: exports.loginSchema };
