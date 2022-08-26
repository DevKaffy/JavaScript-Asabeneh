// localStorage.clear()

let wrapper = document.querySelector('.wrapper')
wrapper.style.display = 'flex'
wrapper.style.alignItems = 'center'
wrapper.style.flexDirection = 'column'
wrapper.style.marginTop = '1rem'
wrapper.style.fontFamily = 'Sans-serif'

let heading = document.querySelector('.heading')
heading.style.fontSize = '40px'
heading.style.marginBottom = '5px'

let heading2 = document.querySelector('.heading2')
heading2.style.fontSize = '20px'
heading2.style.marginBottom = '5px'
heading2.style.borderBottom = '2px solid black'

let heading3 = document.querySelector('.heading3')
heading3.style.fontSize = '15px'
heading3.style.marginBottom = '5px'
heading3.style.borderBottom = '2px solid black'

let container = document.querySelector('.container')
container.style.display = 'grid'
container.style.gridTemplateColumns ='repeat(6, 1fr)'
container.style.gridGap = '5px'
container.style.padding = '5px'

    function isPrime(num) {
        if(num < 2) return false;
      
        for (let k = 2; k < num; k++){
          if( num % k == 0){
            return false;
          }
        }
        return true;
      }


        for (let i = 0; i <= 101; i++) {
            let containerChild = document.createElement('div')
            containerChild.textContent = i
            if (isPrime(i)){
                    containerChild.style.backgroundColor = '#fd5e53'
                }else if (i%2 ===0){
                    containerChild.style.backgroundColor = '#21bf73'
                }else {
                    containerChild.style.backgroundColor = '#fddb3a'
                }
            containerChild.style.padding= '10px 20px'
            containerChild.style.textAlign = 'center'
            containerChild.style.color = 'white'
            containerChild.style.fontSize = '30px'
            container.appendChild(containerChild)
        }

       



