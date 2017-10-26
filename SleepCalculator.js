const getSleepHours = (day) => {
    if (day === 'Monday') {
      return 8;
    } else if (day === 'Tuesday') {
      return 7;
    } else if (day === 'Wednesday') {
      return 6;
    } else if (day === 'Thursday') {
      return 6;
    } else if (day === 'Friday') {
      return 7;
    } else if (day === 'Saturday') {
      return 10;
    } else if (day === 'Sunday') {
      return 9;
    }
     
    };
    
  
  const getActualSleepHours = () => {
    return getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +  
    getSleepHours('Sunday');  
    
  }
  
  const getIdealSleepHours = () => {
    let idealHours = 7.5;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours === idealSleepHours) {
      console.log('You got perfect amount of sleep!.')
    }
    
    if (actualSleepHours > idealSleepHours) {
      console.log('You got more sleep than needed!.')
    }
    
    if (actualSleepHours < idealSleepHours) {
      console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours less sleep than you needed this week. Get some rest.');
    } 
  
  
  };
  calculateSleepDebt();