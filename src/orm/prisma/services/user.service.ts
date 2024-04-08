import {  User } from "src/core";
import { PrismaGenericRepository } from "../generique-repo";
import { PrismaClient } from "@prisma/client";
import { AbsUserService } from "src/core/abstract/service/user-service.abstract";
import bcrypt from 'bcrypt';
export class UserService extends PrismaGenericRepository<User> implements AbsUserService{
    constructor(prismaClient: PrismaClient) {
        super(prismaClient, 'user');
    }

    private get client() {
        return this._client;
    }

    async getByRoleName(roleName: string): Promise<User[]> {
        return this.client.user.findMany({
            where: {
                role: {
                    titre: roleName,
                },
            },
            select: {
                id: true,
                username: true,
                role: true,
                password: false, // Exclure le mot de passe du résultat
                roleId: true,
            }
        });
    }



    async create(item: User): Promise<User> {
        // Hasher le mot de passe avant de créer l'utilisateur
        const hashedPassword = await bcrypt.hash(item.password, 10);
    
        // Créer l'objet à pousser, incluant le mot de passe hashé
        const itemToPush = {
            username: item.username,
            password: hashedPassword, // Utiliser le mot de passe hashé ici
            role: {
                connect: {
                    id: item.roleId,
                },
            },
        }
    
        // Créer l'utilisateur dans la base de données
        return await this.client.user.create({
            data: itemToPush,
            select: {
                id: true,
                username: true,
                role: true,
                password: false, // Exclure le mot de passe du résultat
                roleId: true,
            }
        });
    }

    async  delete(id: string): Promise<User> {
        return await this.client.user.delete({
            where: { id },
            select: {
                id: true,
                username: true,
                role: true,
                password: false, // Exclure le mot de passe du résultat
                roleId: true,
            }
        });

    }

    async update(id: string, item: User): Promise<User> {
        // Hasher le mot de passe avant de mettre à jour l'utilisateur
        if (item.password) {
            item.password = await bcrypt.hash(item.password, 10);
        }

        const newUser = {
            password: item.password,
            username: item.username,
        }
    
        // Mettre à jour l'utilisateur dans la base de données
        return await this.client.user.update({
            where: { id },
            data: newUser,
            select: {
                id: true,
                username: true,
                role: true,
                password: false, // Exclure le mot de passe du résultat
                roleId: true,
            }
        });
    }

    async get(id: string): Promise<User | null> {
        return await this.client.user.findUnique({
            where: { id },
            select: {
                id: true,
                username: true,
                role: true,
                password: false, // Exclure le mot de passe du résultat
                roleId: true,
            }
        });
    }

    async getAll(): Promise<User[]> {
        return await this.client.user.findMany({
            select: {
                id: true,
                username: true,
                role: true,
                password: false, // Exclure le mot de passe du résultat
                roleId: true,
            }
        });
    }

    //contain username 
    async getByUsername(username: string): Promise<User[]> {
        return await this.client.user.findMany({
            where: { 
                username: {
                    contains: username,
                    mode: 'insensitive',
                },
                } ,
            select: {
                id: true,
                username: true,
                role: true,
                password: false, // Exclure le mot de passe du résultat
                roleId: true,
            }
        });
    }




    


}