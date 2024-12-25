const db = require('../config'); // Подключение к базе данных

class TeacherController {
    // Создание учителя
    async createTeacher(req, res) {
        const { login, pass, fio } = req.body;

        console.log('Creating teacher with data:', { login, pass, fio });

        const checkTeacherSql = "SELECT * FROM teachers WHERE login = ?";

        db.get(checkTeacherSql, [login], (err, row) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: 'Database error' });
            }

            // Если учитель с таким логином уже существует
            if (row) {
                console.warn('Teacher with this login already exists:', login);
                return res.status(400).json({ error: 'Teacher with this login already exists' });
            }

            // Если логин уникален, продолжаем с созданием учителя
            const insertTeacherSql = "INSERT INTO teachers (fio, login, pass) VALUES (?, ?, ?)";

            db.run(insertTeacherSql, [fio, login, pass], function (err) {
                if (err) {
                    console.error('Failed to create teacher:', err);
                    return res.status(500).json({ error: 'Failed to create teacher' });
                } else {
                    console.log('Teacher created successfully:', this.lastID);
                    return res.status(201).json({ id: this.lastID, login: login }); // Возвращаем ID нового учителя
                }
            });
        });
    }

    // Получение учителя
    async getTeacher(req, res) {
        const { login, password } = req.body;
        const sql = `SELECT * FROM teachers WHERE (login=? AND pass=?);`;
        
        db.all(sql, [login, password], (err, rows) => {
            if (err) return res.json(err);
            if (rows.length === 0) return res.json('Данные не совпадают! Проверьте и повторите попытку');
            else res.json(rows);
        });
    }

    // Удаление учителя
    async deleteTeacher(req, res) {
        const { id } = req.body;

        // Проверяем, указан ли id и является ли он числом
        if (!id || isNaN(id)) {
            return res.status(400).json({ message: 'Invalid teacher ID' });
        }

        // Проверяем, существует ли учитель с данным ID
        const checkTeacherSql = 'SELECT * FROM teachers WHERE id = ?';

        db.get(checkTeacherSql, [id], (err, teacher) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            // Если учитель не существует, возвращаем ошибку
            if (!teacher) {
                return res.status(404).json({ message: 'Teacher not found' });
            }

            // Удаляем учителя
            const deleteSql = 'DELETE FROM teachers WHERE id = ?';

            db.run(deleteSql, [id], function (err) {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }

                // Проверяем, сколько записей было удалено
                if (this.changes === 0) {
                    return res.status(404).json({ message: 'Teacher not found' });
                }

                return res.json({ message: 'Teacher deleted successfully' });
            });
        });
    }
}

module.exports = new TeacherController()
