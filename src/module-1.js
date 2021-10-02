import Joi from 'joi';

const passJoi = Joi.string().min(3).max(10);

export default function addPassword(password) {
   return passJoi.validate(password); 
}

