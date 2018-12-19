const{LineHandler}=require('bottender')
const olami = require('./nlp/Olami')

exports.lineHandler=new LineHandler()
  .onText(async context=>{
    const text=context.event.text;
    const userId = context._session.user.id;
    const reply = await olami.nli(text, userId);
    await context.replyText(reply)
  }
)
