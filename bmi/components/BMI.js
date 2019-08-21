export default class BMI{
  bmiCalculate(w,h,r)
  { 
    var tmp= w/h**2
  if(r == "Asian"){
    if (tmp<=18.5){
       return "Under Weight";
     }
    if(tmp<=24.9 && tmp >18.5){
       return "Normal Weight";
     }
    if(tmp<=29.9 && tmp>24.9){
       return "OverWeight";
     }
    if(tmp>29.9){
       return "Obesity";
     }
    

   }
   else if (r =="Western"){
     if (tmp<=19.5){
       return "Under Weight";
     }
     if( tmp<=34.9 && tmp >19.5){
       return "Normal Weight";
     }
     if( tmp<=39.9 && tmp >34.5){
       return "OverWeight";
     }
     if(tmp>39.9){
       return "Obesity";
     }





   }





  }
  
  
}