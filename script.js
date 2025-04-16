const data = {
    "شيش طاووق": {
      ingredients: "قطع دجاج مشوية مع تتبيلة خاصة",
      sizes: {
        "كبير أوي": 104,
        "كبير": 79,
        "وسط": 54
      }
    },
    "تشكين مشوي": {
      ingredients: "قطع دجاج مشوية على الفحم",
      sizes: {
        "كبير أوي": 83,
        "كبير": 58,
        "وسط": 33
      }
    },
  "مولتن تشيز": {
  "ingredients": "مولتن_تشيز",
  "sizes": {
  "كبير أوي": 90,
  "كبير": 65,
  "وسط": 40
      }
  },
  "ميرت":{
  "ingredients": "ميرت",
  "sizes": {
  "كبير أوي": 107,
  "كبير": 82,
  "وسط": 57
      }
  },
  "كوتروفورماج": {
      "ingredients": "كوتروفورماج",
      "sizes": {
      "كبير أوي": 109,
       "كبير": 84,
       "وسط": 59
          }                
         
  },
  " سناكس": {
   "ingredients": "سوبر_سناكس",
  "sizes": {
  "كبير أوي": 98,
   "كبير": 73,
  "وسط": 48
      }         
         
  },
  "مشروم":{
  "ingredients": "مشروم",
  "sizes": {
  "كبير أوي": 116,
  "كبير": 91,
  "وسط": 66
          }    
      },
           "بانيه": {
          "ingredients": "بانيه",
          "sizes": {
          "كبير أوي": 83,
          "كبير": 58,
          "وسط": 33
          }
      },
          "هاواي":{
          "ingredients": "هاواي",
          "sizes": {
          "كبير أوي": 111,
          "كبير": 86,
          "وسط": 61
          }
      },
      
          "شنغهاي":{
          "ingredients": "شنغهاي",
          "sizes": {
          "كبير أوي": 110,
          "كبير": 85,
          "وسط": 60
          }
      },
          "موتزاريلا": {
          "ingredients": "موتزاريلا",
          "sizes": {
          "كبير أوي": 90,
          "كبير": 65,
          "وسط": 40
          }
      },
          "اسكندر": {
          "ingredients": "اسكندر",
          "sizes": {
          "كبير أوي": 90,
          "كبير": 65,
          "وسط": 40
          }
      },
          "تشيكن & تشيز":{
          "ingredients": "تشيكن_تشيز",
          "sizes": {
          "كبير أوي": 90,
          "كبير": 65,
          "وسط": 40
          }
      },
          "اسبيشيال":{
          "ingredients": "اسبيشيال",
          "sizes": {
          "كبير أوي": 91,
          "كبير": 66,
          "وسط": 41
          }
      },
          "فريسكو":{
          "ingredients": "فريسكو",
          "sizes": {
          "كبير أوي": 110,
          "كبير": 85,
          "وسط": 60
          }
      },
          "مكسيكي":{
          "ingredients": "مكسيكي",
          "sizes": {
          "كبير أوي": 110,
          "كبير": 85,
          "وسط": 60
          }
      },
           "داندي":{
          "ingredients": "داندي",
          "sizes": {
          "كبير أوي": 108,
          "كبير": 83,
          "وسط": 58
          }
      },
          "تشيلي": {
          "ingredients": "تشيلي",
          "sizes": {
          "كبير أوي": 111,
          "كبير": 86,
          "وسط": 61
          }
      },
          "كرسبر":{
          "ingredients": "كرسبر",
          "sizes": {
          "كبير أوي": 100,
          "كبير": 75,
          "وسط": 50
          }
      },
  };
  
  function showDetails(itemName) {
      const meal = data[itemName];
      const container = document.querySelector('.select-order');
      
      if (!meal) {
          container.innerHTML = `<p>لا توجد بيانات لهذا الصنف</p>`;
          return;
      }
      
      let sizeOptions = '';
      for (let size in meal.sizes) {
          sizeOptions += `<option value="${size}">${size} - ${meal.sizes[size]} جنيه</option>`;
      }
      container.innerHTML = `
          <h3 class="meal-name">${itemName}</h3>
          <p><strong>المكونات:</strong> ${meal.ingredients}</p>
          <label>الحجم:
          <select id="selected-size">${sizeOptions}</select>
          </label>
          <br><br>
          <button class="add-to-cart" onclick="addToCart()"> إضافة إلى السلة </button> `;
  }
  document.addEventListener("DOMContentLoaded", function () {
  const addToCartButton = document.querySelector(".add-to-cart"); // زر الإضافة
  const cartList = document.getElementById("cart-items"); // القائمة التي ستظهر فيها العناصر
  const totalPriceElement = document.getElementById("total-price"); // إجمالي السعر

  let cart = [];
  let total = 0;

  addToCartButton.addEventListener("click", function () {
      let product = this.parentElement; // العنصر الأب (المنتج)
      let productName = product.querySelector("h2").textContent; // اسم المنتج
      let productPrice = parseInt(product.querySelector(".price").textContent); // استخراج السعر

      // إضافة العنصر إلى السلة
      let li = document.createElement("li");
      li.textContent = `${productName} - price: ${productPrice} `;

      cartList.appendChild(li);

      // تحديث المجموع الكلي
      total += productPrice;
      totalPriceElement.textContent = total;
  });
});
function addToCart() {
  const cartList = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  const mealName = document.querySelector(".meal-name").textContent;

  const selectedSize = document.getElementById("selected-size");
  const selectedOption = selectedSize.options[selectedSize.selectedIndex];

  const size = selectedOption.value;
  const price = parseFloat(selectedOption.textContent.split('-')[1]);

  const li = document.createElement("li");
  li.textContent = mealName + " - " + size + ": " + price.toFixed(2) + " ج.م";
  cartList.appendChild(li);

  let currentTotal = parseFloat(totalPriceElement.textContent) || 0;
  currentTotal += price;
  totalPriceElement.textContent = currentTotal.toFixed(2);
}