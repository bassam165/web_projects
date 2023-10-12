<template>
  <div class="container">
        <!-- header section -->
        <div id="tittle">
            <h1>Number Converter</h1>
        </div>
        <!-- main content section -->
        <div id="main">
            <div id="number_system">
                <div class="input_group">
                    <label for="">Decimal</label>
                    <input type="text" placeholder="Input any decimal number"
                    v-model="numbers.decimal">
                </div>
                <div class="input_group">
                    <label for="">Binary</label>
                    <input type="text" placeholder="Input any binary number"
                    v-model="numbers.binary">
                </div>
                <div class="input_group">
                    <label for="">Octal</label>
                    <input type="text" placeholder="Input any octal number"
                    v-model="numbers.octal">
                </div>
                <div class="input_group">
                    <label for="">Hexadecimal</label>
                    <input type="text" placeholder="Input any Hexadecimal number"
                    v-model="numbers.hexadcimal">
                </div>
                <div class="restet_button">
                    <button>Reset</button>
                </div>
            </div>
        </div>
        <!-- number system converstion -->
    </div>
</template>

<script>
require('@/assets/style.css')
export default {
  name: 'App',
  data(){
    return{
      numbers:{
        decimal: 0,
        binary: 0,
        octal: 0,
        hexadcimal: 0,
      },
    };
  },
  watch: {
    'numbers.decimal': function(value){
     this.numbers.decimal=parseInt(value); 
     this.numbers.binary = value.toString(2);
     this.numbers.octal = value.toString(8);
     this.numbers.hexadcimal = value.toString(16);
    },
  },
};
</script>


