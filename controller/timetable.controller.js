const db = require('../config');

class TimeTableController {
    // Create a new timetable entry
    async createTimetable(req, res) {
        const { subject_id, group_id, place, teacher_id, day, placeInDay, start_time, end_time } = req.body;

        const sql = `INSERT INTO timetable (subject_id, group_id, place, teacher_id, day, placeInDay, start_time, end_time) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

        db.run(sql, [subject_id, group_id, place, teacher_id, day, placeInDay, start_time, end_time], function (err) {
            if (err) {
                return res.status(500).json({ error: 'Failed to create timetable entry', details: err.message });
            }
            res.status(201).json({ id: this.lastID, message: 'Timetable entry created successfully' });
        });
    }

    // Retrieve timetable entries
    async getTimetable(req, res) {
        const { group_id, day } = req.query;

        let sql = `SELECT * FROM timetable WHERE id=?`;
        const params = [];

        if (group_id || day) {
            sql += ' WHERE';
            if (group_id) {
                sql += ' group_id = ?';
                params.push(group_id);
            }
            if (day) {
                if (params.length) sql += ' AND';
                sql += ' day = ?';
                params.push(day);
            }
        }

        db.all(sql, params, (err, rows) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to retrieve timetable', details: err.message });
            }
            res.json(rows);
        });
    }

    // Update a timetable entry
    async updateTimetable(req, res) {
        const { id, subject_id, group_id, place, teacher_id, day, placeInDay, start_time, end_time } = req.body;

        const sql = `UPDATE timetable 
                     SET subject_id = ?, group_id = ?, place = ?, teacher_id = ?, day = ?, placeInDay = ?, start_time = ?, end_time = ? 
                     WHERE id = ?`;

        db.run(sql, [subject_id, group_id, place, teacher_id, day, placeInDay, start_time, end_time, id], function (err) {
            if (err) {
                return res.status(500).json({ error: 'Failed to update timetable entry', details: err.message });
            }
            if (this.changes === 0) {
                return res.status(404).json({ message: 'Timetable entry not found' });
            }
            res.json({ message: 'Timetable entry updated successfully' });
        });
    }

    // Delete a timetable entry
    async deleteTimetable(req, res) {
        const { id } = req.body;

        const sql = `DELETE FROM timetable WHERE id = ?`;

        db.run(sql, [id], function (err) {
            if (err) {
                return res.status(500).json({ error: 'Failed to delete timetable entry', details: err.message });
            }
            if (this.changes === 0) {
                return res.status(404).json({ message: 'Timetable entry not found' });
            }
            res.json({ message: 'Timetable entry deleted successfully' });
        });
    }
}

module.exports = new TimeTableController();
