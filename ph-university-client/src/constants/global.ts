export const monthOptions = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

 const genders = ['Male','Female',"Others"]
 export const genderOptions = genders.map((item)=>({
    value:item.toLocaleLowerCase(),
    label:item
 }))

 const bloodGroup = ['A+','A-',"B+",'B-','AB+','AB-','O+',"O-"]

 export const bloodGroupOptions = bloodGroup.map((item)=>({
    value:item.toLocaleLowerCase(),
    label:item
 }))

export const monthList = monthOptions.map(month =>({
    value:month,
    label:month
}))