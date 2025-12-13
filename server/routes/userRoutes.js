import express from 'express'
import {registerUser , loginUser, userCredites} from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser )
userRouter.post('/login', loginUser )
userRouter.get('/credits', userAuth , userCredites )

export default userRouter


// http://localhost:4000/api/user/register
// http://localhost:4000/api/user/login