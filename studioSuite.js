const checkin=document.getElementById('checkin')
const checkout=document.getElementById('checkout')
const button=document.querySelector('.date button')
let price=document.querySelectorAll('.Price')[0].id
let errormsg=document.querySelectorAll('.errormsg')[0]
sessionStorage.setItem('price',price)

const handleDate=(e)=>{
    e.preventDefault()
    let checkinDate =new Date(checkin.value)
    let checkoutDate= new Date(checkout.value)
    let checkinmonth =new Date(checkin.value).getMonth()
    let checkindate =new Date(checkin.value).getDate()
    let todaysMonth =new Date().getMonth()
    let todaysDate =new Date().getDate()
   
    // to verify the date
   if(checkinDate.getTime() && checkoutDate.getTime()){
    let checkinmonth =new Date(checkin.value).getMonth()
    let checkindate =new Date(checkin.value).getDate()
    let todaysMonth =new Date().getMonth()
    let todaysDate =new Date().getDate()
    let invalid=false
    e.preventDefault()
        // to get the total time  booked for the hotel
       let timeDifference=checkoutDate.getTime() -  checkinDate.getTime()

        // to get the number of days booked at the hotel
       let dayDifference=timeDifference /(1000 * 3600 * 24)

        // to see if check out is before check in date 
       let invalidFormat=dayDifference.toString().includes('-')

    // to verify if the selected check out date is less than the check in date
       if(invalidFormat){
           e.preventDefault()
           errormsg.innerHTML='incorrect check out date, please select a correct date.'
            invalid=true
       }

    
    //    to check if the reservation is more than nine months
       if(dayDifference > 240){
           e.preventDefault()
           errormsg.innerHTML='Sorry, your reservation cannot be for more than nine months.'
           invalid=true
       }

    // to verify if the selected check in month is less than todays month
       if(checkinmonth < todaysMonth){
        e.preventDefault()
            errormsg.innerHTML='incorrect check in month, please select a correct month.'
            invalid=true
        }

    // to verify if the selected check in date is less than todays date
        if(checkindate < todaysDate){
           e.preventDefault()
            errormsg.innerHTML='incorrect check in date, please select a correct date.'
            invalid=true
        }
        
    // to verify if the selected check in date is the same with todays date 
        if(dayDifference === 0){
            e.preventDefault()
            errormsg.innerHTML='incorrect date, please select a correct date.'
            invalid=true
        }
        //    this checks if everything is valid
       if(!invalidFormat && dayDifference < 240 && !invalid){
            e.preventDefault()
            sessionStorage.setItem('days',dayDifference)
            errormsg.innerHTML=''
            window.location='checkout.html'
    }

    }


}


button.addEventListener('click',handleDate)