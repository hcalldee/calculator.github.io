<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Calcualtor</title>
      <head>
        <link rel="stylesheet" href="style.css" />
        <script src="script.js" defer></script>
        </head>
    </head>

    <body>
        <div class="container">
            <section id="Display-area">
                <div class="currentInput"></div>
                <div class="answerScreen">0</div>
            </section>
            <section class="keypad-btns">
                <?php //$button = [1,2,3,4,5,6,7,8,9,0]; ?>
                <button type="button" class="fun_btn" value="**">x<sup style="font-size: 12px;">y</sup></button>
                <button type="button" class="fun_btn" value="%">%</button>
                <button type="button" class="fun_btn" id="clear" value="">C</button>
                <button type="button" class="fun_btn" value="/">/</button>
                <button type="button" class="num_btn" value="7">7</button>
                <button type="button" class="num_btn" value="8">8</button>
                <button type="button" class="num_btn" value="9">9</button>
                <button type="button" class="fun_btn" value="*">x</button>
                <button type="button" class="num_btn" value="4">4</button>
                <button type="button" class="num_btn" value="5">5</button>
                <button type="button" class="num_btn" value="6">6</button>
                <button type="button" class="fun_btn" value="+">+</button>
                <button type="button" class="num_btn" value="1">1</button>
                <button type="button" class="num_btn" value="2">2</button>
                <button type="button" class="num_btn" value="3">3</button>
                <button type="button" class="fun_btn" value="-">-</button>
                <button type="button" class="num_btn" value=".">.</button>
                <button type="button" class="num_btn" value="0">0</button>
                <button type="button" class="fun_btn" id="erase" value="">&#11013;</button>
                <button type="button" class="fun_btn" id="evaluate" value="">=</button>
            </section>
        </div>
    </body>
</html>