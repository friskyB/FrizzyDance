const Feedback = require('./feedback')
class StreakBar {

  constructor(stage){
    this.feedback = new Feedback(stage)
    this.streak = 0;
    this.update = this.update.bind(this);

  }

  plus(){
    this.streak += 1;
    // $("#streak").html(this.streak);
    this.update();
  }

  update(){
    let width = this.streak % 9/9 *100
    if (this.streak < 9){
      $(".streak-bar").css({"width": `${width}%`});
    }else{
      $(".streak-bar").css({"width": `100%`});
      $("body").css({"background": `#ffd265`});
      $(".streak-container").css({"border":"2px solid #ffd265"})
    }
    if(this.streak === 9) {
      this.feedback.show();
    }
  }

  clear(){
    this.streak = 0;
    this.feedback.hide();
    // $("#streak").html(0);
    $(".streak-bar").css({"width": `0%`});
    $("body").css({"background": `#6e9298`});
    $(".streak-container").css({"border":"2px solid #aaa"})
  }
}

module.exports = StreakBar
