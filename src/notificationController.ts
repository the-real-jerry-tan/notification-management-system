/**
 * © 2024 Jerry Tan. All Rights Reserved.
 *
 * This software is the confidential and proprietary information of Jerry Tan
 * ("Confidential Information"). You shall not disclose such Confidential Information
 * and shall use it only in accordance with the terms under which this software
 * was distributed or otherwise published, and solely for the prior express purposes
 * explicitly communicated and agreed upon, and only for those specific permissible purposes.
 *
 * This software is provided "AS IS," without a warranty of any kind. All express or implied
 * conditions, representations, and warranties, including any implied warranty of merchantability,
 * fitness for a particular purpose, or non-infringement, are disclaimed, except to the extent
 * that such disclaimers are held to be legally invalid.
 */

import { Request, Response } from 'express';
import { scheduleJob } from 'node-schedule';
import { v4 as uuidv4 } from 'uuid';

// In-memory storage for notifications
let notifications: { id: string; message: string; recipient: string; schedule?: string; sent: boolean }[] = [];

// Send a notification immediately
export const sendNotification = (req: Request, res: Response) => {
    const { message, recipient } = req.body;
    const id = uuidv4();
    notifications.push({ id, message, recipient, sent: true });
    console.log(`Notification sent to ${recipient}: ${message}`);
    res.status(201).json({ message: 'Notification sent', id });
};

// Schedule a notification
export const scheduleNotification = (req: Request, res: Response) => {
    const { message, recipient, schedule } = req.body;
    const id = uuidv4();
    const job = scheduleJob(schedule, () => {
        notifications.push({ id, message, recipient, schedule, sent: true });
        console.log(`Scheduled notification sent to ${recipient}: ${message}`);
    });
    notifications.push({ id, message, recipient, schedule, sent: false });
    res.status(201).json({ message: 'Notification scheduled', id, schedule });
};

// Get all notifications
export const getNotifications = (req: Request, res: Response) => {
    res.json({ notifications });
};
