console.log("hello");
router.get('/appData', (req, res) => {
    console.log('This is the list of users.');
    res.send('This is the list of users.');
});
module.exports = router;