  let body = document.getElementsByTagName('body');
  let pre = document.createElement('pre');
  document.body.appendChild(pre);


  //para cada hijo directo

  let index = '';
  let count_h1 = 0;
  let count_h2 = 1;

  for (let i = 0; i < body[0].childElementCount; i++) {

      if (body[0].children[i].nodeName === 'H1') {
          count_h1++;
          index += (count_h1 + ".- " + body[0].children[i].innerText) + '<br>';
          count_h2=1;

      } else if (body[0].children[i].nodeName === 'H2') {
          index += ("    " + count_h1 + "." + count_h2 + ".- " + body[0].children[i].innerText) + '<br>';
          count_h2++;
      }


      //para cada hijo de hijos
      for (let j = 0; j < body[0].children[i].childElementCount; j++) {

          if (body[0].children[i].children[j].nodeName === 'H1') {
              index += (count_h1 + ".- " + body[0].children[i].children[j].innerText) + '<br>';

          } else if (body[0].children[i].children[j].nodeName === 'H2') {
              index += ("    " + count_h1 + "." + count_h2 + ".- " + body[0].children[i].children[j].innerText) + '<br>';
              count_h2++;
          }
      }
  }
  pre.innerHTML = index
