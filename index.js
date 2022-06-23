var first_num = prompt("Enter first number: ");
var op = prompt("Enter operator: " );
var second_num=prompt("Enter second number: ");

var result;

if (op == '+')
{
   result = first_num + second_num;
}
else if (op == '-')
{
    result = first_num - second_num;
}
else if (op == '/'){

 result = first_num / second_num;

}

else if (op == '*')
{
    result = first_num * second_num;
}
else if (op == '%')
{
    result = first_num % second_num;
}

alert(result);