import cron from 'node-cron';
import { connectToDB } from './lib/utils';
import Requestt from '../../models/Requestt'; 
import User from '../../models/User'; 

// Connect to the database
connectToDB();

async function checkPeriods() {
    const currentDate = new Date();

    try {
        const demandes = await Requestt.find({ status: "مقبول" });
        
        for (const demande of demandes) {
            const startDate = new Date(demande.date_start);
            const endDate = new Date(demande.date_end);
            const isWithinPeriod = currentDate >= startDate && currentDate <= endDate;
            const { user_id } = demande;

            // Update document based on the condition
            await User.findByIdAndUpdate(user_id, { is_work: !isWithinPeriod });
        }

    } catch (err) {
        console.error(err);
    }
}

cron.schedule('53 18 * * *', checkPeriods);
console.log('Cron job scheduled to run every day at 00:00');
