import React from 'react'

export function bulking_context( calories ) {
  return (
    <div style={{ textAlign: 'justify' }}>
      <p>To gain muscle, you need to consume more calories than you use. And this will result in some fat gain. Now the amount of fat gain depends on various factors.</p>
      <p>If you just eat blindly, without somewhat knowing what you are eating, then you will either not consume enough food or will consume too much. The first thing to do when planning your bulking diet is to find your daily calorie expenditure.</p>
      <br/>
      <p>Since you have calculated the <b>required calories</b> in homepage itself, <b>{calories}</b> calories is what you will aim for each day in terms of total caloric intake.</p>
      <p>We have our total calorie intake, but it does not help us much if we don't know how to correctly distribute these calories. If we somehow conjure a meal that is {calories} calories and eat this whole meal in the morning, the results would not be pretty. { Math.ceil( 0.17 * calories ) } or so would be used for normal functions, while the other { Math.floor( 0.83 * calories ) } calories would be excreted or stored as fat.</p>
      <br/>
      <div style={{ fontSize: '1.2em', fontWeight: 'bold' }}>CALORIES PER MEAL</div>
      <p>Remember that one of the ten commandants of bodybuilding is <em>"Thou shall eat more than 3 meals a day."</em> So let's assume we eat 7 meals a day, remember this includes post workout shakes. {calories} (total calories) / 7 (meals a day) = {Math.round( calories / 7 )} calories each meal (approx).</p>
    </div>
  )
}
