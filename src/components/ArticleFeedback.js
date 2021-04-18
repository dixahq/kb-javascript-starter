import React from "react";
import cx from "classnames";
import useTranslation from "@elevio/kb-kit/lib/hooks/useTranslation";
import useArticleFeedback from "@elevio/kb-kit/lib/hooks/useArticleFeedback";

export const FeedbackInitial = ({
  className,
  title,
  onPositive,
  onNegative,
  isLoading,
}) => {
  const { t } = useTranslation();
  const defaultTitle = t(
    "articleFeedback.question",
    "Did this article help solve your problem?"
  );
  const _title = title || defaultTitle;
  return (
    <div
      className={cx("article-feedback", className)}
      data-testid="article-feedback"
    >
      <h3 className="article-feedback-title">{_title}</h3>
      <div className="article-feedback-options">
        <button
          className="article-feedback-button"
          type="button"
          onClick={onPositive}
          disabled={isLoading}
          data-testid="article-feedback-positive"
        >
          {t("articleFeedback.positive", "Yes")}
        </button>
        <button
          className="article-feedback-button"
          type="button"
          onClick={onNegative}
          disabled={isLoading}
          data-testid="article-feedback-negative"
        >
          {t("articleFeedback.negative", "No")}
        </button>
      </div>
    </div>
  );
};

const FeedbackError = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={cx("article-feedback", className)}>
        {t("articleFeedback.error", "Sorry there has been a problem, please try again.")}
    </div>
  );
}

export const FeedbackSuccess = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={cx("article-feedback", className)}>{t("articleFeedback.thanksMsg", "Thanks for submitting your feedback!")}</div>
  );
};

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return <div className="article-feedback-message" data-testid={error}>{error}</div>;
};

const EmailBox = ({ error, ...props }) => {
  const { t } = useTranslation();
  return (
    <>
      <input
        className={cx("article-feedback-input", !!error && "invalid")}
        type="email"
        name="email"
        placeholder={t("articleFeedback.emailPlaceholder", "Email (optional)")}
        data-testid="article-feedback-email-input"
        {...props}
      />
      <ErrorMessage />
    </>
  );
};

const MessageBox = ({ error, ...props }) => {
  const { t } = useTranslation();
  return (
    <>
      <textarea
        className={cx("article-feedback-input", !!error && "invalid")}
        name="feedback"
        rows={8}
        placeholder={t("articleFeedback.feedbackPlaceholder", "How could this article be improved?")}
        data-testid="article-feedback-feedback-input"
        {...props}
      />
      <ErrorMessage error={error} />
    </>
  );
};

const SubmitButton = ({ disabled }) => {
  const { t } = useTranslation();
  const classes = cx("submit", { invalid: disabled });
  return (
    <button
      type="submit"
      className={cx("article-feedback-button", classes)}
      disabled={disabled}
      data-testid="article-feedback-submit-button"
    >
      {t("articleFeedback.submit", "Submit")}
    </button>
  );
  // return null;
};

export const FeedbackForm = ({
  className,
  isSubmitting,
  isEmailHidden,
  values,
  showAnonymousWarning,
  messageError,
  emailError,
  onFeedbackSkipped,
  handleEmailChange,
  handleMessageChange,
  onSubmit,
}) => {
  const { t } = useTranslation();

  return (
    <form className={cx("article-feedback", className)} onSubmit={onSubmit} noValidate>
      <h3 className="article-feedback-title">
          {t("articleFeedback.negativeQuestion", "Sorry this article did not help. We would love your feedback.")}
      </h3>

      <MessageBox
        disabled={isSubmitting}
        error={messageError}
        value={values.feedback}
        onChange={handleMessageChange}
      />

      {!isEmailHidden && (
        <EmailBox
          disabled={isSubmitting}
          value={values.email}
          onChange={handleEmailChange}
          error={emailError}
        />
      )}

      {showAnonymousWarning && (
        <p className="article-feedback-message">
            {t("articleFeedback.confirmAnon", "Are you sure you want to send this anonymously?")}
        </p>
      )}

      <div className="article-feedback-actions">
        <SubmitButton disabled={isSubmitting || !!messageError} />

        {!showAnonymousWarning && (
          <button
            className="article-feedback-button secondary"
            onClick={onFeedbackSkipped}
            disabled={isSubmitting}
            data-testid="article-feedback-skip-button"
            type="button"
          >
            {t("articleFeedback.skip", "Skip and send")}
          </button>
        )}
      </div>
    </form>
  );
};

const ArticleFeedback = ({ className }) => {
  const {
    stage,
    isFeedbackEnabled,
    isLoading,
    values,
    isFeedbackFormSubmitting,
    emailFieldIsHidden,
    showAnonymousWarning,
    hasSubmitted,
    messageError,
    emailError,
    onSubmit,
    onNegativeReaction,
    onPositiveReaction,
    onFeedbackSkipped,
    handleMessageChange,
    handleEmailChange,
  } = useArticleFeedback();

  // return null;

  if (!isFeedbackEnabled) return null;
  if (stage === "error") return <FeedbackError className={className} />;
  if (stage === "positive" || stage === "submitted")
    return <FeedbackSuccess className={className} />;
  if (stage === "negative") {
    return (
      <FeedbackForm
        className={className}
        onFeedbackSkipped={onFeedbackSkipped}
        onSubmit={onSubmit}
        isSubmitting={isFeedbackFormSubmitting}
        isEmailHidden={emailFieldIsHidden}
        handleMessageChange={handleMessageChange}
        handleEmailChange={handleEmailChange}
        showAnonymousWarning={showAnonymousWarning}
        hasSubmitted={hasSubmitted}
        values={values}
        messageError={messageError}
        emailError={emailError}
      />
    );
  }
  return (
    <FeedbackInitial
      className={className}
      onPositive={onPositiveReaction}
      onNegative={onNegativeReaction}
      isLoading={isLoading}
    />
  );
};

export default ArticleFeedback;
