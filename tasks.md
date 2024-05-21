# SPEC-01: Kaubamaja Football Prediction Application

## Background
Kaubamaja, a company in Estonia, wishes to host an internal competition for its employees in celebration of the upcoming European football cup. The application will allow employees to make predictions about match outcomes and the overall tournament winner. The main goal is to boost employee engagement and morale through a community-focused, sports-themed event.

## Requirements

### Login system
- [ ] Login interface UI
- [ ] Login functionality
- [ ] User registration and database

### Dashboard UI
- [ ] Leaderboard to display employee rankings.
- [ ] UI for the qualification groups (A, B, C, D, E, F)
- [ ] Clickable match cards to submit predictions
- [ ] UI for the qualification matches binomial tree.

### Prediction system
- [ ] Functionality to submit predictions for each match.
- [ ] Prediction database
- [ ] Ability to predict the overall winner of the European football cup.
- [ ] Scoring system to award points for correct predictions.

### Leaderboard functionality
- [ ] Leaderboard to display employee rankings.

### Admin panel
- [ ] Admin account interface
- [ ] Ability to add matches
- [ ] Ability to update match results
- [ ] Create a deadline for submitting predictions

## Method

### Database Schema
- **Users Table:** Includes columns for ID, username, password hash, and email.
- **Matches Table:** Includes columns for ID, team1, team2, and match date.
- **Predictions Table:** Includes columns for ID, user ID, match ID, and predicted winner.
- **Results Table:** Includes columns for ID, match ID, and winner.

### Authentication
Secure authentication using username and password.

### Scoring Algorithm
Points awarded for each correct prediction, with additional points for correctly predicting the overall winner.
