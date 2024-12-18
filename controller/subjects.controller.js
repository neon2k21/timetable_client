const db = require('../config') 
// createGroup  getGroup  updateGroup  deleteGroup 
 
class SubjectsController{ 
 
    //Создание группы 
    async createSubject(req, res) { 
        const { name } = req.body; 
     
        // Сначала проверим, существует ли уже пользователь с таким логином 
        const checkUserSql = "SELECT * FROM subjects WHERE name = ?"; 
         
        db.get(checkUserSql, [name], (err, row) => { 
            if (err) { 
                return res.status(500).json({ error: 'Database error' }); 
            } 
 
            // Если пользователь с таким логином уже существует 
            if (row) { 
                return res.status(400).json({ error: 'Subject with this name already exists' }); 
            } 
 
            // Если логин уникален, продолжаем с созданием пользователя 
            const insertUserSql = "INSERT INTO subjects (name) VALUES (?)"; 
     
            db.run(insertUserSql, [name], function(err) { 
                if (err) { 
                    return res.status(500).json({ error: 'Failed to create subjects' }); 
                } else { 
                    return res.status(201).json({ id: this.lastID, name: name }); // Возвращаем ID нового пользователя 
                } 
            }); 
        }); 
    } 
     
 
    //Получение группы 
    async getSubject(req,res){ 
        const { name } = req.body 
        const sql = ( "select * from subjects where (name=?); ") 
        db.all(sql,[name], (err,rows) => { 
            if (err) return res.json(err) 
            if(rows.length === 0) return res.json('Данные не совпадают! Проверьте и повторите попытку') 
            else res.json(rows) 
        }) 
    } 
 
 
    //Удаление группы 
    async deleteSubject(req, res) { 
        const { name } = req.body; 
     
        // Проверяем, указан ли name и является ли оно числом 
        if (!name ) { 
            return res.status(400).json({ message: 'Invalid subject name' }); 
        } 
     
        // Проверяем, существует ли группы с именем name 
        const checkUserSql = 'SELECT * FROM subjects WHERE name = ?'; 
     
        db.get(checkUserSql, [name], (err, subject) => { 
            if (err) { 
                return res.status(500).json({ error: err.message }); 
            } 
     
            // Если пользователь не существует, возвращаем ошибку 
            if (!subject) { 
                return res.status(404).json({ message: 'Subject not found' }); 
            } 
     
            // Удаляем пользователя 
            const deleteSql = 'DELETE FROM subjects WHERE name = ?'; 
     
            db.run(deleteSql, [name], function (err) { 
                if (err) { 
                    return res.status(500).json({ error: err.message }); 
                } 
     
                // Проверяем, сколько записей было удалено 
                if (this.changes === 0) { 
                    return res.status(404).json({ message: 'Subjects not found' }); 
                } 
     
                return res.json({ message: 'Subjects deleted successfully' }); 
            }); 
        }); 
    } 
     
     
     
    //Установка токена телефона к юзеру 
    async updateSubject(req,res){ 
        const { id, name } =req.body 
 
     
        // Проверяем, существует ли группы с именем name 
        const checkUserSql = 'UPDATE subjects SET name = ? WHERE id = ?'; 
     
        db.get(checkUserSql, [name,id], (err, group) => { 
            if (err) { 
                return res.status(500).json({ error: err.message }); 
            } 
     
            // Если пользователь не существует, возвращаем ошибку 
            // if (!group) { 
            //     return res.status(404).json({ message: 'Subjects not found' }); 
            // } 
             
            return res.json({ message: 'Subjects updated successfully' }); 
        }); 
 
    } 
 
     
} 
 
 
 
module.exports = new SubjectsController()