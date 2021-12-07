// create a class named Car
    class Car {
        // make (String) - The car's manufacturer. E.g. Honda
        // model (String) - The type of model. E.g. Civic
        // year (Integer) - Four digit year the car was made. E.g. 1998
        constructor(make, model, year) {
            this.make = make
            this.model = model
            this.year = year
        }
        
        // honk - This method should log "BEEP BEEP!" to the console when called.
        honk() {
            console.log('BEEP BEEP!')
        }
        // performMaintenance - This method should use the setTimeout function to log "maintenance complete" to the console after exactly 3 seconds.
        performMaintenance() {
            var timerId = setTimeout(function() {
            console.log('maintenance complete')
            }, 3000) 
        }
    }
    
// create variable named mySweetRide and assign it a car created with your class using:
var mySweetRide = new Car('pontiac','fiero',1988)
    // make: 'Pontiac'
    // model: 'Fiero'
    // make: 1988
    // call mySweetRide's honk method once
    // call mySweetRide's performMaintenance method once
    mySweetRide.honk()
    mySweetRide.performMaintenance()