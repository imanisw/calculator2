function round_number(num) {
    //first, move the decimal two places
    num = num * 100;

    //1.99042 = 199.042

    //then, round the number to the nearest integer
    num = Math.round(num);

    //199.042 rounded === 199

    //then move the decimal back two places
    num = num / 100;

    //199 == 1.99 

    // handle trailing zeroes
    num = num.toFixed(2);

    return num;
}
//get all of the calculator inputs 
const inputs = document.querySelectorAll("[name='qty']");

//evaluate all the inputs
inputs.forEach(function (input) {
    //for each  individual input, listen for change 
    input.addEventListener("change", function (e) {
    const this_input = e.target; 
       const qty =  parseFloat(e.target.value);
       const this_row = this_input.closest(".row");
       
       const amazon = this_row.querySelector(".amazon");
       // cost is quantity x price 
       const amazon_span = amazon.querySelector("span");
       const amazon_price = parseFloat(amazon.dataset.price);
       const amazon_cost =  qty * amazon_price;
        amazon_span.innerHTML = round_number(amazon_cost); 
        amazon.classList.add("active");

       const freshdirect = this_row.querySelector(".freshdirect");
       const freshdirect_span = freshdirect.querySelector("span");
       const freshdirect_price = parseFloat(freshdirect.dataset.price);
       const freshdirect_cost = qty * freshdirect_price;
       freshdirect_span.innerHTML = round_number(freshdirect_cost); 
       freshdirect.classList.add("active");
       
       const obed = this_row.querySelector(".1bed"); 
       const obed_span = obed.querySelector("span");
       const obed_price = parseFloat(obed.dataset.price); 
       const obed_cost = qty * obed_price;
       obed_span.innerHTML = round_number(obed_cost); 
       obed.classList.add("active");
            // lets find the least expensive retailer. we default amazon, bc of the alphabet (no other reason)
       
            let cheap = amazon;
// if (and only id) peapod is cheaper 
       if(freshdirect_cost < amazon_cost && freshdirect_cost < peapod_cost) {
           cheap = freshdirect; 
       }

       if(peapod_cost < amazon_cost && peapod_cost < freshdirect_cost) {
           cheap = peapod; 
       }
        const current_cheap = this_row.querySelector(".cheap");

        if(current_cheap) {
            current_cheap.classList.remove("cheap");
        }
           
        // this_row.querySelector(".cheap").classList.remove("cheap");
          if (cheap) { 
        cheap.classList.add("cheap");
          }
    });
});