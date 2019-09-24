// Global
var varTest = 1;
nonVartest = 2;

init1();

function init1() {
    // Escopo privado
    var varFunTest = 3;
    // Global
    nonVarFunTest = 4;
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
    console.log(`
        dentro de function escopo var: ${varTest};
        dentro de function escopo sem var: ${nonVartest};
        // erro > dentro de function escopo function var: {varFunTest};
        dentro de function escopo function sem var: ${nonVarFunTest};
    `);
}())