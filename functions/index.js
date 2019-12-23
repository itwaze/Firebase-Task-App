const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const createNotification = (notification) => {
    return admin.firestore().collection('notifications')
        .add(notification)
};

exports.createTask = functions.firestore.document('task/{taskId}').onCreate(doc => {
    const task = doc.data();

    const { title, desc, date } = task;

    const notification = {
        title,
        desc,
        date
    };

    return createNotification(notification)
});