const API_PATH = "https://64a930f08b9afaf4844a622b.mockapi.io/love/love"

const elHeart = document.querySelector(".heart");
const elHeartTwo = elHeart.querySelector(".heartikki");
const elHeartThree = elHeart.querySelector(".heartuch");
const elInputNameIts = document.querySelector(".js-form-name-its");
const elInputNameHim = document.querySelector(".js-form-name-him");
const elBtn = document.querySelector(".btn");


let style = document.createElement("style");

const postLove = async (firstName, lastName) => {
  const res = await fetch(API_PATH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      userName: firstName,
      friendName: lastName
    })
  })
  const data = await res.json();
  console.log(data)
}

elBtn.addEventListener("click", () => {
  let elInputNameItsValue = elInputNameIts.value.trim();
  let elInputNameHimValue = elInputNameHim.value.trim();
  elInputNameIts.value = "";
  elInputNameHim.value = "";
  let randomNumber = Math.floor(Math.random() * (100 - 70)) + 70;
  elHeart.style.backgroundColor = "red";
  style.innerHTML = `.line{
    background-image: linear-gradient(135deg, rgba(255, 255, 255, 1) ${120 - randomNumber
    }%,  rgba(255, 0, 0) ${120 - randomNumber}%
  );
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: 862;
  left: -50px;
}
.line2{
    background-image: linear-gradient(135deg, rgba(255, 255, 255, 1) ${120 - randomNumber
    }%,  rgba(255, 0, 0) ${120 - randomNumber}%
  );
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: 862;
  top: -50px;
}
`;

  document.getElementsByTagName("head")[0].appendChild(style);
  console.log(100 - randomNumber);
  elHeartTwo.className = "line";
  elHeartThree.className = "line2";
  document.querySelector(".js-user-name").textContent = elInputNameItsValue;
  document.querySelector(".js-foiz-love").textContent = `${randomNumber}%`;
  document.querySelector(".js-user-love-name").textContent =
    elInputNameHimValue;

  postLove(elInputNameItsValue, elInputNameHimValue)

});
