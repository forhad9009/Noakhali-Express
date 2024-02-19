const allSeatNumber = document.querySelectorAll('.seat-number');

let count = 0;
let count2 = 40;



for(const seatNumber of allSeatNumber){
    seatNumber.addEventListener('click', function(event){
        
        count = count + 1;
        count2 = count2 -1;

        const allBookingSeat = document.getElementById('booking-seat');
        allBookingSeat.innerText = count;
        const currentSeat = document.getElementById('current-seat');
        currentSeat.innerText = count2;


        const seatName = seatNumber.querySelector('h5');

        const seatNameTitle = seatName.innerText;
        console.log(seatNameTitle);

    

        const price = document.getElementById('price').innerText;
        console.log(price);

        const p = document.createElement('p');
        p.innerText = seatNameTitle;
        const h4 = document.createElement('h4');
        h4.innerText = `
        ECONOMY
        `;
        const h3 = document.createElement('h3');
        h3.innerText = price;
        

        const seatTitle = document.getElementById('seat-title');

        seatTitle.appendChild(p);
        seatTitle.appendChild(h4);
        seatTitle.appendChild(h3);

        const totalPrice = document.getElementById('total-price').innerText;
        const convertTotalPrice = parseInt(totalPrice) ;
        document.getElementById('total-price').innerText = convertTotalPrice + parseInt(price);

        const grandTotal = document.getElementById('grand-total').innerText;
        const convertGrandTotal = parseInt(grandTotal);
        document.getElementById('grand-total').innerText = convertGrandTotal + parseInt(price);

    })
}


const applyButton = document.getElementById('apply-button');
applyButton.addEventListener('click', function(){
    
    const coupon = document.getElementById('coupon-input').value;
      
    if(coupon === 'NEW15'){

         const total = document.getElementById('total-price').innerText;
         const totalT = parseInt(total);
        const discountAmount = totalT * 0.2;
        console.log(discountAmount);
        const discountGrandTotal = document.getElementById('grand-total');
        discountGrandTotal.innerText = totalT - discountAmount;
        document.getElementById('coupon-input').value = '';
        
    }
})