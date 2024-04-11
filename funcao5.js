let altura = prompt ("Digite a altura");
let largura = prompt ("Digite a largura");
let area;
let perimetro;
 
function areaPerimetro (alturap, largurap){
    area = (altura*largura);
    perimetro = (altura*2 + largura*2);
}  
areaPerimetro (altura, largura);
alert (`A área é de ${area} e o perímetro é de ${perimetro}`);



