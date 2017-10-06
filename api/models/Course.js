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
    userId:{
      model:'user'
    },
    categoryId:{
      model:'category'
    },
    levelId:{
      model:'level'
    },


    price:{
      type: 'integer'
    },
    oldPrice:{
      type: 'integer'
    },
    picture:{
      type: 'text'
    },
    generalDescription:{
      type:'text'
    },
    requirement:{
      type:'text'
    },
    benefit:{
      type:'text'
    },
    objectAndGoals:{
      type:'text'
    }
  }
};

