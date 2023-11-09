import React, { useState } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [isCreating, setCreating] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const [newTask, setNewTask] = useState({ name: '', description: '' });

  const handleCreate = () => {
    setCreating(true);
  };

  const handleEdit = (task) => {
    setCurrentTask(task);
    setEditing(true);
  };

  const handleDelete = (task) => {
    const updatedTasks = tasks.filter((t) => t !== task);
    setTasks(updatedTasks);
  };

  const handleCreateTask = () => {
    setTasks([...tasks, newTask]);
    setCreating(false);
    setNewTask({ name: '', description: '' });
  };

  const handleUpdateTask = () => {
    const updatedTasks = tasks.map((task) =>
      task === currentTask ? { ...task, ...newTask } : task
    );
    setTasks(updatedTasks);
    setEditing(false);
    setCurrentTask({});
  };

  return (
    <Container maxWidth="md" style={{ background: 'white', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        Lista de Tarefas
      </Typography>
      <Button
        variant="contained"
        startIcon={<Add />}
        style={{
          background: 'linear-gradient(45deg, #FFA500, #FF6347)',
          color: 'white',
        }}
        onClick={handleCreate}
      >
        Criar Tarefa
      </Button>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <ListItemText primary={task.name} secondary={task.description} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleEdit(task)} edge="end" aria-label="editar">
                <Edit />
              </IconButton>
              <IconButton onClick={() => handleDelete(task)} edge="end" aria-label="deletar">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      {/* Formulário de criação de tarefa */}
      <Dialog open={isCreating} onClose={() => setCreating(false)}>
        <DialogTitle>Criar Nova Tarefa</DialogTitle>
        <DialogContent>
          <TextField
            label="Nome"
            fullWidth
            value={newTask.name}
            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
          />
          <TextField
            label="Descrição"
            fullWidth
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCreating(false)}>Cancelar</Button>
          <Button color="primary" onClick={handleCreateTask}>
            Criar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Formulário de edição de tarefa */}
      <Dialog open={isEditing} onClose={() => setEditing(false)}>
        <DialogTitle>Editar Tarefa</DialogTitle>
        <DialogContent>
          <TextField
            label="Nome"
            fullWidth
            value={newTask.name}
            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
          />
          <TextField
            label="Descrição"
            fullWidth
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditing(false)}>Cancelar</Button>
          <Button color="primary" onClick={handleUpdateTask}>
            Atualizar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
