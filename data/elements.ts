const mapping = {
    blue_button: 'button.btn-primary',
    dynamic_locator: "//a[@href='/dynamicid']",
    class_locator: "//a[@href='/classattr']",
    loadDelay_locator: "//a[@href='/loaddelay']",
    btn_class_atribute: "//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]"
}

module.exports = { mapping };