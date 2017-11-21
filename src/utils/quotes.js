let quotes = [
  'When it starts to hurt, thats when the set starts',
  'EAT BIG, LIFT BIG, GET BIG!',
  'With great size comes great responsibility',
  'Failure is only a temporary change in direction to set you straight for your next success',
  'To achieve something you’ve never had before, you must do something you’ve never done before',
  'Strength Within, Pride Throughout',
  'Winners Train, Losers Complain',
  'Never say the sky\'s the limit when there are footprints on the moon',
  'Build your body, build your character',
  'Fall down seven times, get up eight',
  'If you always do what you have always done, you will always get what you have always got',
  'The best way to predict your future is to create it',
  'You don’t drown by falling in the water; you drown by staying there',
  'There are so many people out there who will tell you that you can’t. What you’ve got to do is to turn around and say – watch me',
  'Hustle to gain more Muscle',
  'You must do what others don\'t, to achieve what others won\'t',
  'You are what you eat, so don\'t be fast, easy, cheap or fake',
  'Fitness is not about being better than someone. Fitness is about being better than the person you were yesterday',
  'The best day to start exercising is today. Tomorrow can turn into weeks, months or years',
  'It is far better to be exhausted from success than to be rested from failure'
]

export default function() {
  let index = Math.round( Math.random() * quotes.length )
  return quotes[ index ]
}
