export const seclectFood = (foods)=>{
    console.log("Ban da chon mon an voi ten la :" + foods.name);
    return{
        type:"SERLECT_FOOD",
        payload:foods
    }
}