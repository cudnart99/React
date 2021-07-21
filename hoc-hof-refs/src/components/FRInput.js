import React from 'react'

// Function lúc chưa dùng React.forwardRef()

// function FRInput() {
//     return (
//         <div>
//             <input type = "text" />
//         </div>
//     )
// }

// B1 : tạo 1 biến có tên giống function , 
// cho bằng React.forwardRef( () => {} ) 

// const FRInput = React.forwardRef( () => {} )

// B2 : khai báo tham số props , ref , cho hàm ban đầu vào {}

const FRInput = React.forwardRef((props,ref) => {
    return (
        <div>
            <input type = "text" ref = {ref} />
        </div>
    )
})

export default FRInput
