const getSleepHours = (day) => {
    switch (day)  {
      case 'Monday':
        return 8;
      case 'Tuesday':
          return 7;
      case 'Wednesday':
          return 6;
        case 'Thursday':
          return 6;
      case 'Friday':
          return 7;
      case 'Saturday':
          return 10;
      case 'Sunday':
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