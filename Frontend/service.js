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

// Identification des users

export function registerUser(data) {
    return client.post('/auth/register', data)
}

export function loginUser(data) {
    return client.post('/auth/login', data)
}

export function logoutUser() {
    return client.post('/auth/logout')
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


// Fonctions pour les escape game

export function getAllGames(){
    return client.get('/game')
}

export function getGameById(id){
    return client.get(`/game/${id}`)
}

export function addGame(){
    return client.post('/game')
}

export function updateGame(id){
    return client.put (`/game/${id}`)
}

export function deleteGame(id){
    return client.delete(`/game/${id}`)
}

// Fonctions pour les paiements

export function getAllPayments(){
    return client.get('/paiement')
}

export function getPaymentById(id){
    return client.get(`/paiement/${id}`)
}   

export function addPayment(){
    return client.post('/paiement')
}

export function updatePayment(id){
    return client.put (`/paiement/${id}`)
}

export function deletePayment(id){
    return client.delete(`/paiement/${id}`)
}

// Fonctions pour les avis

export function getAllAvis(){
    return client.get('/avis')
}

export function getAvisById(id){
    return client.get(`/avis/${id}`)
}

export function addAvis(){
    return client.post('/avis')
}

export function updateAvis(id){
    return client.put (`/avis/${id}`)
}

export function deleteAvis(id){
    return client.delete(`/avis/${id}`)
}

// Fonctions pour les options

export function getAllOptions(){
    return client.get('/option')
}

export function getOptionById(id){
    return client.get(`/option/${id}`)
}

export function addOption(){
    return client.post('/option')
}

export function updateOption(id){
    return client.put (`/option/${id}`)
}

export function deleteOption(id){
    return client.delete(`/option/${id}`)
}

// Fonctions pour ligneOption

export function getAllLigneOptions(){
    return client.get('/ligneoption')
}

export function getLigneOptionById(id){
    return client.get(`/ligneoption/${id}`)
}

export function addLigneOption(){
    return client.post('/ligneoption')
}

export function updateLigneOption(id){
    return client.put (`/ligneoption/${id}`)
}

export function deleteLigneOption(id){
    return client.delete(`/ligneoption/${id}`)
}

