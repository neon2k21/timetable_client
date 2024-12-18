const db = require('../config') 
// createGroup  getGroup  updateGroup  deleteGroup 
 
class groupController{ 
 
    //Создание группы 
    async createGroup(req, res) { 
        const { name } = req.body; 
     
        // Сначала проверим, существует ли уже пользователь с таким логином 
        const checkUserSql = "SELECT * FROM groups WHERE name = ?"; 
         
        db.get(checkUserSql, [name], (err, row) => { 
            if (err) { 
                return res.status(500).json({ error: 'Database error' }); 
            } 
 
            // Если пользователь с таким логином уже существует 
            if (row) { 
                return res.status(400).json({ error: 'Group with this name already exists' }); 
            } 
 
            // Если логин уникален, продолжаем с созданием пользователя 
            const insertUserSql = "INSERT INTO groups (name) VALUES (?)"; 
     
            db.run(insertUserSql, [name], function(err) { 
                if (err) { 
                    return res.status(500).json({ error: 'Failed to create group' }); 
                } else { 
                    return res.status(201).json({ id: this.lastID, name: name }); // Возвращаем ID нового пользователя 
                } 
            }); 
        }); 
    } 
     
 
    //Получение группы 
    async getGroup(req,res){ 
        const { name } = req.body 
        const sql = ( "select * from groups where (name=?);" ) 
        db.all(sql,[name], (err,rows) => { 
            if (err) return res.json(err) 
            if(rows.length === 0) return res.json('Данные не совпадают! Проверьте и повторите попытку') 
            else res.json(rows) 
        }) 
    } 
 
 
    //Удаление группы 
    async deleteGroup(req, res) { 
        const { name } = req.body; 
     
        // Проверяем, указан ли name и является ли оно числом 
        if (!name || isNaN(name)) { 
            return res.status(400).json({ message: 'Invalid group name' }); 
        } 
     
        // Проверяем, существует ли группы с именем name 
        const checkUserSql = 'SELECT * FROM groups WHERE name = ?'; 
     
        db.get(checkUserSql, [name], (err, group) => { 
            if (err) { 
                return res.status(500).json({ error: err.message }); 
            } 
     
            // Если пользователь не существует, возвращаем ошибку 
            if (!group) { 
                return res.status(404).json({ message: 'Group not found' }); 
            } 
     
            // Удаляем пользователя 
            const deleteSql = 'DELETE FROM groups WHERE name = ?'; 
     
            db.run(deleteSql, [name], function (err) { 
                if (err) { 
                    return res.status(500).json({ error: err.message }); 
                } 
     
                // Проверяем, сколько записей было удалено 
                if (this.changes === 0) { 
                    return res.status(404).json({ message: 'Group not found' }); 
                } 
     
                return res.json({ message: 'Group deleted successfully' }); 
            }); 
        }); 
    } 
     
     
     
    //Установка токена телефона к юзеру 
    async updateGroup(req,res){ 
        const { id, name } =req.body 
 
     
        // Проверяем, существует ли группы с именем name 
        const checkUserSql = 'UPDATE groups SET name = ? WHERE id = ?'; 
     
        db.get(checkUserSql, [name,id], (err, group) => { 
            if (err) { 
                return res.status(500).json({ error: err.message }); 
            } 
     
            // Если пользователь не существует, возвращаем ошибку 
            if (!group) { 
                return res.status(404).json({ message: 'Group not found' }); 
            } 
             
            return res.json({ message: 'Group updated successfully' }); 
        }); 
 
    } 
 
     
} 
 
 
 
module.exports = new groupController()