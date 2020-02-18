const phrases = [' "Se puede motivar con el miedo, se puede motivar con la recompensa. Pero esos dos métodos son sólo temporales. La única cosa duradera es la auto motivación." -Homer Rice',
  ' "No te midas por lo que has logrado, sino por lo que deberías haber logrado con tu capacidad." -John Wooden',
  ' "El dolor es temporal. Puede durar un minuto o una hora o un día, o un año, pero con el tiempo va a disminuir y algo más tomará su lugar. Sin embargo, si abandono, eso durará para siempre." -Lance Armstrong',
  ' "No preguntes lo que tus compañeros de equipo pueden hacer por ti. Pregúntate qué puedes hacer tú por tus compañeros de equipo." -Magic Johnson',
  ' "La excelencia no es un acto de un día, sino un hábito. Tú eres lo que repites en muchas ocasiones." -Shaquille O’Neal',
  ' "Un hombre muy ocupado para cuidar de su salud es como un mecánico muy ocupado por cuidar sus herramientas." -Proverbio español',
  ' "Para descubrir tu verdadero potencial, primero debes encontrar tus propios límites y entonces debes tener el valor de ir más allá de ellos." -Picabo Street',
  ' "El éxito es cuando la preparación y la oportunidad se encuentran." -Bobby Unser',
  ' "¿Qué hacer con un error?: lo reconocen, lo reconoces, aprendes de él, olvídalo." -Dean Smith',
  ' "Los obstáculos no tienen que frenarte. Si te encuentras con una pared, no das la vuelta y abandonas. Encuentras la manera de subir a ella, pasar a través de ella o rodearla." -Michael Jordan',
  ' "No es cuánto dinero ganes, sino cuánto dinero conservas, qué tan duro trabaja para ti y para cuántas generaciones lo conserva."',
  ' "Cuando pienses en dejarlo, piensa en porqué empezaste." -Mike Jovanni',
  ' "Para tener éxito… Es necesario encontrar algo a lo que aferrarse, algo que te motive, algo que te inspire." -Tony Dorsett',
  ' "Haz siempre un esfuerzo total, aun cuando las probabilidades están en contra tuya." -Arnold Palmer',
  ' "Lo que te falte de talento lo puedes compensar con el deseo, el espíritu y dando el 110 por ciento todo el tiempo." -Don Zimmer',
  ' "Cuanto más practico, más suerte tengo." -Gary Player',
  ' "¡Nunca te rindas! El fracaso y el rechazo son sólo el primer paso para tener éxito." -Jim Valvan',
  ' "La diferencia entre lo imposible y las posibles depende de la voluntad de un hombre." -Tommy Lasorda',
  ' "La persistencia puede cambiar el fracaso en un logro extraordinario." -Matt Biondi',
  ' "Los buenos jugadores se inspiran a sí mismos. Los grandes jugadores inspiran a otros."',
  ' "Puede haber personas que tienen más talento que tú, pero no tienes ninguna excusa para que cualquiera pueda trabajar más de lo que tú lo haces." -Derek Jeter',
  ' "No voy a predecir la historia. Pero nada es imposible." -Michael Phelps',
  ' "Estoy construyendo un fuego, y todos los días entreno, añado más combustible. En el momento justo, enciendo el partido." -Mia Hamm',
  ' "No dejes que lo que no puedes hacer interfiera con lo que puedes hacer." -John Wooden',
  ' "Un viaje de mil millas comienza con el primer paso." -Lao Tse',
  ' "La única manera de probar que eres un buen deportista es perder." -Ernie Banks'
]
let random = Math.floor(Math.random() * (phrases.length - 1));
let sentence = phrases[random]

document.getElementById('randomSentence').innerHTML = sentence