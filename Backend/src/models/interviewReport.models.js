const mongoose = require('mongoose');

/**
 * job despcription
 * resume text
 * self description :String 
 * 
 * MatchScore:{
 *  number 
 * }
 * technical question:[
 * {
 *  question: '',
 * intention:',
 * answer: '',
 * }]
 * 
 * behavioral question [
 * {
 *  question: '',
 * intention:',
 * answer: '',
 * }]
 * 
 * skill gaps [{
 *  skill: '',
 *  severity:'
,   
 * }]
 * prepration plan [{
 *  day:number,
 *  focus:'',
 * task: '',
 * }]
 */


const technicalQuestionSchema = new mongoose.Schema({
    question:{
        type: String,
        required : [true, "Technical Question is required"]
    },
   intention:{
        type: String,
        required : [true, "Intention is required"]
    },
    answer:{
        type: String,
        required : [true, "Answer is required"]
    }
}, {
    _id:false
})


const behavioralQuestionSchema = new mongoose.Schema({
    question:{
        type: String,
        required : [true, "Technical Question is required"]
    },
   intention:{
        type: String,
        required : [true, "Intention is required"]
    },
    answer:{
        type: String,
        required : [true, "Answer is required"]
    }
}, {
    _id:false
})

const skillGapSchema = new mongoose.Schema({
    skill:{
        type: String,
        required : [true, "Skill is required"]
    },
    severity:{
        type: String,
        required : [true, "Severity is required"]
    }
}, {
    _id:false
})



const preparationPlanSchema = new mongoose.Schema({
    day:{
        type: Number,
        required : [true, "Day is required"]
    },  
    focus:{
        type: String,
        required : [true, "Focus is required"]
    },
    task:{
        type: String,
        required : [true, "Task is required"]
    }

})



const interviewReportSchema = new mongoose.Schema({
    jobDescription :{
        type: String,
        required : [, "Job Description is required"]
    },
    resume:{
        type: String,
    },
    selfDescription:{
        type: String,
    },
    matchScore:{
        type: Number,
        min:0,
        max:100,
    },
        technicalQuestions:[technicalQuestionSchema],
        behavioralQuestion:[behavioralQuestionSchema],
        skillGaps:[skillGapSchema],
        preparationPlan:[preparationPlanSchema]
}, {
    timestamps: true
});



const InterviewReport = mongoose.model('InterviewReport', interviewReportSchema);

module.exports = InterviewReport;