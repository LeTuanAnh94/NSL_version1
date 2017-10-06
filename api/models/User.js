/**
 * Created by TuanAnh on 10/2/2017.
 */
var bcrypt = require('bcrypt');
module.exports ={
  attributes: {
    id:{
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },

    fid:{
      type: 'string'
    },

    gid:{
      type: 'string'
    },

    fullname:{
      type: 'string',
      size: 100
    },

    email:{
      type: 'string',
      unique: true,
      size: 45
    },

    password: {
      type: 'string',
    },

    job:{
      type: 'string',
      size: 45
    },

    description:{
      type: 'string',
      size: 256
    },

    avatar:{
      type: 'string'
    },

    isActive:{
      type:'boolean',
      defaultsTo: false,
    },

    role:{
      type: 'string',
      enum: ['admin','teacher','member'],
      defaultsTo: 'member'
    },
    //ROLE FOR TEACHER
    teacherDescription:{
      type:'TEXT'
    },
    teacherStatus:{
      type:'String',
      enum: ['not','waiting','reject','success'],
      defaultsTo: 'not'
    },
    teacherUpdateDate:{
      type:'datetime'
    },
    //ONE TO MANY
    course:{
      collection: 'course',
      via:'userId'
    },
  },
  beforeCreate: function(user, next) {
    if(!user.password){
      return next();
    }
    require('../services/bcryptPassword.js').encode(user.password, function(hash){
      user.password = hash;
      return next();
    });
  },

  beforeUpdate: function(user, next) {
    if(!user.password){
      return next();
    }
    require('../services/bcryptPassword.js').encode(user.password, function(hash){
      user.password = hash;
      return next();
    });
  }
}
