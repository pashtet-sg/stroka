   let s = `Моє ім'я Олександр`;
   let symb = `н`;

        function counterSymbol(str) {
            let counter = 0;
            for (let i = 0; i <= str.length; i++) {
                if (str[i] == symb) counter++; 
            }
            console.log(`Кількість співпало: ${counter}`);
        }
        
    
    counterSymbol(s);