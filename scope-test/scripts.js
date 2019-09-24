// Global
var varTest = 'varTest';
nonVartest = 'nonVartest';

init1();

function init1() {
    // Escopo privado
    var varFunTest = 'varFunTest';
    // Global
    nonVarFunTest = 'nonVarFunTest';
}

console.log(`
        escopo var: ${varTest};
        escopo sem var: ${nonVartest};
        // erro > escopo function var: {varFunTest};
        escopo function sem var: ${nonVarFunTest};
    `);

/* Nome desse tipo de função
 * "Immediately Invoked Function Expressions" ou "Self Executing Functions"
 */
(function () {
    // Escopo privado Compartilhado dentro da IIFE
    var varImmFunTest = 'varImmFunTest';

    console.log(`
        dentro de function escopo var: ${varTest};
        dentro de function escopo sem var: ${nonVartest};
        // erro > dentro de function escopo function var: {varFunTest};
        dentro de function escopo function sem var: ${nonVarFunTest};
    `);

    function init2 () {

        console.log(`
            dentro da immediately invoked function: ${varImmFunTest};
        `);
    }
}())