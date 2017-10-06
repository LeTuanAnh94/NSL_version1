/**
 * Created by TuanAnh on 10/5/2017.
 */
module.exports = {

  attributes: {
    id:{
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    course:{
      collection: 'course',
      via:'categoryId'
    },
    name:{
      type: 'string',
      size: 256
    }
  }
};

