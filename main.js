
const button = document.querySelector('#button')
const copyButton = document.querySelector('#copy')


const Form = {

    name: document.querySelector('#name'),
    phone: document.querySelector('#phone'),
    ticket: document.querySelector('#ticket'),
    additionalTeams: document.querySelector('#teams'),
    additionalSkype: document.querySelector('#skype'),
    date: document.querySelector('#date'),
    time: document.querySelector('#time'),
    timezone: document.querySelector('#timezone'),
    subject: document.querySelector('#subject'),
    type: document.querySelector('#type'),
    analyst: document.querySelector('#analyst'),

   
    
    getValues() {

       let value = Form.type
       let template = value.options[value.selectedIndex].value

       let valueTimeZone = Form.timezone
       let timezoneSet = valueTimeZone.options[valueTimeZone.selectedIndex].value

          

        return {
            name: Form.name.value,
            phone: Form.phone.value,
            ticket: Form.ticket.value,
            additionalTeams: Form.additionalTeams.checked,
            additionalSkype: Form.additionalSkype.checked,
            date: Form.date.value,
            time: Form.time.value,
            timezoneSet,
            subject: Form.subject.value,
            template,
            analyst: Form.analyst.value
        }
        
    }

    

}


button.addEventListener('click', handleClick);


function handleClick (event) {

    event.preventDefault()
    
    
 const name =  Form.name.value
 const phone = Form.phone.value
 const ticket = Form.ticket.value
 const additionalTeams = Form.additionalTeams.checked
 const additionalSkype = Form.additionalSkype.checked

 let teams
 const date = Form.date.value
let time = Form.time.value
 const subject = Form.subject.value
 const analyst = Form.analyst.value
 const template =  Form.getValues().template
 const timezone = Form.getValues().timezoneSet

 const textarea = document.querySelector('#textarea')

 
 
 if(time != ""){
     
    timeSplitted =  time.split(':')
    hour = parseInt(time)

     if(timezone == 1) {
         hour -= 1

         time = hour + ":" + timeSplitted[1] + " EST"

     } else if(timezone == 2) {
        hour -= 2
        time = hour + ":" + timeSplitted[1] + " CST"

     } else if(timezone == 3) {
        hour -= 4

        time = hour + ":" + timeSplitted[1] + " MST"

     }else if(timezone == 4) {

        hour -= 5

        time = hour + ":" + timeSplitted[1] + " PST"

     }
 
 }

 if(additionalTeams && additionalSkype){

    teams = "Teams and Skype, and "
 } else if(additionalTeams &&  !additionalSkype) {

    teams = "Teams, and "


 } else if(!additionalTeams && additionalSkype) {

    teams = "Skype, and "

 } else {

    teams = ""
 }

 
 if(template == 1) {

    textarea.innerHTML = `Dear ${name},

According to your validation, your problem with ${ticket} - ${subject} -  was solved by us and then the ticket will be closed.

Ticket closuring authorized by user - ${name}.

Attention provided by the analyst - ${analyst}.

We are committed to improve the quality and efficiency of our services. In this way, we would like to hear your opinion about the service provided, please complete a short survey that will be sent to your email.

Responses will be reviewed, and we will work on areas where improvement is needed.

We would also like to invite you to join our group at the “Service Desk For You” Workplace to contact our team in a more interactive way, answer your questions and find quick and practical solutions.

Regards,

${analyst}
NAR - Advanced Support

    `
    
 } else if(template == 2) {

    textarea.innerHTML = `Dear ${name},

    According to your validation, your request for ${ticket} - ${subject} -  was completed by us and then the ticket will be closed.
    
    Ticket closuring authorized by user - ${name}.
    
    Attention provided by the analyst - ${analyst}.
    
    We are committed to improve the quality and efficiency of our services. In this way, we would like to hear your opinion about the service provided, please complete a short survey that will be sent to your email.
    
    Responses will be reviewed, and we will work on areas where improvement is needed.
    
    We would also like to invite you to join our group at the “Service Desk For You” Workplace to contact our team in a more interactive way, answer your questions and find quick and practical solutions.
    
    Feel free to join.
    
    Regards,
    
    ${analyst}
    NAR - Advanced Support`

 } else if(template == 3) {

    textarea.innerHTML = `Hello ${name},

    We have tried to contact you on ${teams}your phone ${phone} on ${date} at ${time} to talk about your ticket ${ticket}, regarding the ${subject}, but without response.
    
    Can you please share with us the best time to contact you? To respond, insert the information on the ticket by clicking the “LINK” button below.
    
    Please notice that after three failed contact attempts the ticket will be closed due to lack of contact.
    
    We appreciate your attention and are always available at the Service Desk communication channels for more information.
    
    Regards,
    
    ${analyst}
    NAR - Advanced Support
    
    ----------------------------------------------------
    NUSA: 800-942-6828; NWNA: 800-934-4647; CANADA: 866-637-8535;

    PURINA: 800-625-3369; NESPRESSO: 888-767-7248 (US)/877-537-9550 (Canada);

    GALDERMA CANADA: 888-807-8108; DREYERS/MAS: 800-444-0160 `

 } else if(template == 4) {
    textarea.innerHTML = `Dear ${name}, 

    We have closed your ticket ${ticket}.
    
    We’ve tried to contact you through ${teams} your phone ${phone}, but have not obtained an answer. 
    
    Because of this, we were not able to perform the needed procedures with you.
    
    If you need help or have any doubts, you can contact the Service Desk. 
    
    Regards, 
    ${analyst}
    Advanced Support`
 }




};

new ClipboardJS('.button.clipboard');


    




