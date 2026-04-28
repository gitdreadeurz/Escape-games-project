import axios from "axios";

export const client = axios.create({
    baseURL: "http://localhost:3000"

});

// Fonctions pour les users

export function getAllUsers() {
    return client.get('/user')
}

export function getUserById(id) {
    return client.get(`/user/${id}`)
}

export function updateUser(id) {
    return client.put(`/user/${id}`)
}

export function sofDelUser(id) {
    return client.delete(`/user/${id}`)
}

export function hardDelUser(id) {
    return client.delete(`/user/delete/${id}`)
}

// Fonctions pour les réservations

export function getAllReservations(){
    return client.get('/reservation')
}

export function getReservationById(id){
    return client.get(`/reservation/${id}`)
}

export function addReservation(){
    return client.post('/reservation')
}

export function updateReservation(id){
    return client.put (`/reservation/${id}`)
}

export function deleteReservation(id){
    return client.delete(`/reservation/${id}`)
}

